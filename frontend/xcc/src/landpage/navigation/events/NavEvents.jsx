import React from "react";
import './events.css';


export const NavEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Coding Competition',
            date: 'May 1, 2023',
            description: 'Join us for a coding competition and showcase your skills!'
        },
        {
            id: 2,
            title: 'Web Development Workshop',
            date: 'June 15, 2023',
            description: 'Learn how to build modern web applications using the latest technologies.'
        },
        {
            id: 3,
            title: 'Tech Talk',
            date: 'July 20, 2023',
            description: 'Join us for an interactive discussion on the latest tech trends.'
        }
    ];


    return (
        <div className="events-container">
            <div className="events-list">
                {events.map((event) => (
                    <div key={event.id} className="event-item">
                        <h2>{event.title}</h2>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}