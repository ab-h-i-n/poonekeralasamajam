import React from "react";
import { Card } from "flowbite-react";
import "../css/events.css";

function ThumbnailCard({ items }) {
    return (
        <div className="d-flex px-5 justify-content-center align-items-center notification-cards">
            <a href={items.href} className="no-underline">
                <Card
                    className="max-w-sm"
                    imgSrc={items.imgSrc}
                    style={{ width: "20rem", backgroundColor: '#6ce4ff' }} // Ensure readability
                >
                    <h1 className="text-2xl flex flex-col font-bold tracking-tight text-gray-900 dark:text-white">
                        {items.name}
                    </h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {items.description}
                    </p>
                </Card>
            </a>
        </div>
    );
}

export default ThumbnailCard;
