import { useSelector } from 'react-redux';
import styles from './DoughnutChart.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);


const getProductNames = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:4000/api/products`);
        return response.data.map(item => item.name);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const productNames = await getProductNames();


const DoughnutChart = () => {
    const [orderData, setOrderData] = useState([]);
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/api/orders/all', {
            headers: {
                "Authorization": token,
            }
        })
            .then(response => {
                setOrderData(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const getChartData = (productName) => {
        const mon = orderData.map(item => {
            return item.products.map(product => {
                if (productName.toLowerCase() === product.instance.name.toLowerCase()) {

                    return {
                        name: product.instance.name,
                        quantity: product.quantity,
                    };
                } else {
                    return {
                        name: product.instance.name,
                        quantity: 0,
                    };
                }
            })

        });
        const obj = [].concat(...mon);

        return obj.reduce((acc, curr) => acc + curr.quantity, 0);
    }



    const getOrderData = (productName) => {
        const mon = orderData.map(item => {
            return item.products.map(product => {
                return productName.toLowerCase() === product.instance.name.toLowerCase() ? {
                    name: product.instance.name,
                    quantity: product.quantity,
                } : null;
            })

        });

        const arrayOfObjects = [].concat(...mon).filter(item => item);

        const combinedArray = arrayOfObjects.reduce(function (result, currentObject) {
            const existingObject = result.find((item) => {
                return item.name === currentObject.name;
            });

            if (existingObject) {
                existingObject.quantity += currentObject.quantity;
            } else {
                result.push({ name: currentObject.name, quantity: currentObject.quantity });
            }

            return result;
        }, []);

        return combinedArray;
    }



    const result = productNames.map((label, i) => getOrderData(label));
    const combinedResult = [].concat(...result);
    const sorted = combinedResult.sort((a, b) => {
        return b.quantity - a.quantity;
    });

    const labels = sorted.slice(0, 3).map(item => item.name);

    const data = {
        labels,
        datasets: [
            {
                label: '# of Products',
                data: labels.map((label, i) => getChartData(label)),
                backgroundColor: [
                    'rgba(190, 6, 21, 0.5)',
                    'rgba(38, 31, 139, 0.5)',
                    'rgba(130, 139, 31, 0.5)',
                ],
                borderColor: [
                    'rgba(190, 6, 21, 1)',
                    'rgba(38, 31, 139, 1)',
                    'rgba(130, 139, 31, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className={styles.DoughnutChart}>
            <Doughnut data={data} />
            <h2 className={styles.DoughnutChartTitle}>Best-selling products</h2>
        </div>
    );
}

export default DoughnutChart;