import { useEffect, useState } from "react";

function useResize() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setViewportWidth(window.innerWidth);

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return viewportWidth;
}

export default useResize;