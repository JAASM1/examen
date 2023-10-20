import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/pest-disease-list?key=sk-EV4S65328787d5fe52572`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            {data && data.data && (
                <ul>
                    {data.data.map((plat) => (
                        <li key={plat.id}>
                            <h2>{plat.common_name}</h2>
                            <p>{plat.scientific_name}</p>
                            {plat.images && (
                                <div>
                                    <h3>Images:</h3>
                                    {plat.images.map((image, id) => (
                                        <img
                                          key={id}
                                            src={image.thumbnail}
                                        />
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
