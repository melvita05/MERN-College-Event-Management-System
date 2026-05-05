import React,{useState} from 'react'
import EventCard from './EventCard';
const EventList = () => {
    const events=[
        { id: 1,
         title: 'College Tech Fest',
          date: '2024-10-12',
           description: 'A technical fest for college students.',
            location: 'New York', collegeName: 'NYU',
            imageUrl: "https://example.com/event1.jpg"
        },
        { id: 2, 
            title: 'Coding Hackathon', 
            date: '2024-11-05', 
            description: 'A 24-hour coding competition.',
             location: 'San Francisco',
              collegeName: 'Stanford',
              imageUrl: "https://example.com/event2.jpg"
            },
        { id: 3, 
            title: 'AI & Robotics Workshop', 
            date: '2024-12-10',
             description: 'A workshop on AI and robotics.',
              location: 'Los Angeles',
               collegeName: 'UCLA' ,
               imageUrl: "https://example.com/event3.jpg"
            },
        { id: 4, 
            title: 'Cultural Fest',
             date: '2024-09-15', 
             description: 'Annual cultural fest with music, dance, and art.',
              location: 'Boston',
               collegeName: 'MIT',
            imageUrl: "https://example.com/event3.jpg" }
    ];
    
  //  const [user, setUser] = useState(null);

   // const handleLogin = (userData) => {
      // Simulate a login and set user information
  //    setUser({
   //     name: 'Jane Smith',
    //    email: userData.email,
    //    joinedDate: '2021-09-15',
    //    attendedEvents: [1, 3]  // IDs of events the user has attended
  
  


    return (
        <div className="event-list" >
            {events.map((event, id) => (
                <EventCard
                    key={id}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    imageUrl={event.imageUrl}
                />
            ))}
        </div>
    );
};
export default EventList;
