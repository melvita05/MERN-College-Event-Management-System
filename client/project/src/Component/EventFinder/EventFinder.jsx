
import React, { useState } from 'react';
import EventCard from '../Events/EventCard';
import '../EventFinder/EventFinder.css';

export default function EventFinder() {
    const [searchTerm, setSearchTerm] = useState("");  // State to track search term
    const events = [
        { 
            id: 1,
            title: 'College Tech Fest',
            date: '2024-10-12',
            description: 'A technical fest for college students.',
            location: 'New York', 
            collegename: 'NYU',
            imgs: "https://tse1.mm.bing.net/th?id=OIP.bWFr91UK80Pj8uJwoAP4hwHaEl&pid=Api&P=0&h=180"
        },
        { 
            id: 2, 
            title: 'Coding Hackathon', 
            date: '2024-11-05', 
            description: 'A 24-hour coding competition.',
            location: 'San Francisco',
            collegename: 'Stanford',
            imgs: "https://tse3.mm.bing.net/th?id=OIP.SiVeFrZjOhdaQmcd5NI-CQHaEK&pid=Api&P=0&h=180"
        },
        { 
            id: 3, 
            title: 'AI & Robotics Workshop', 
            date: '2024-12-10',
            description: 'A workshop on AI and robotics.',
            location: 'Los Angeles',
            collegename: 'UCLA',
            imgs: "https://tse3.mm.bing.net/th?id=OIP.NrgZGNt7axbNiqO1gZaPOgHaE8&pid=Api&P=0&h=180"
        },
        { 
            id: 4, 
            title: 'Cultural Fest',
            date: '2024-09-15', 
            description: 'Annual cultural fest with music, dance, and art.',
            location: 'Boston',
            collegename: 'MIT',
            imgs: "https://tse2.mm.bing.net/th?id=OIP.AGsTHKVnOsKbicRVP9g87QHaER&pid=Api&P=0&h=180"
        }
    ];

    // Filter events based on the search term (matching title, date, location, or collegename)
    const filteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.date.includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.collegename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

   
        <div className="event-finder">
            <h1>Find Events</h1>
            <input
                type="text"
                placeholder="Search events by title, date, location, or college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            
            <div className="event-list" >
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            collegename={event.collegename}
                            description={event.description}
                            imgs={event.imgs}
                        />
                    ))
                ) : (
                    <p>No events found matching your search.</p>
                )}
            </div>
        </div>
        
    );
};
