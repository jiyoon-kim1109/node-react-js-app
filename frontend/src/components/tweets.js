import React, {useEffect, useState} from "react";

function Tweet() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        console.log(data);
        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return (
        <section>
            <div className="container-fluid">
                {
                    items.map(item => (
                        <div>
                            <p>{item.name}</p>
                            <p>{item.msg}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Tweet;