import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./event/event.css";
import image1 from './event/images/event1.jpg';
import image2 from './event/images/event2.jpg';
import image3 from './event/images/event3.jpg';
import image4 from './event/images/event4.jpg';
import event_head from './event/images/event-head.png';

class Event extends Component {
  state = {
    events: [
      {
        id: 1,
        title: 'Cloth Donation',
        imageUrl: image1,
      },
      {
        id: 2,
        title: 'Education Campaign',
        imageUrl: image2,
      },
      {
        id: 3,
        title: 'Awareness Campaign',
        imageUrl: image3,
      },
      {
        id: 4,
        title: 'Cleaning Campaign',
        imageUrl: image4,
      },
      // Add more events here...
    ]
  };

  render() {
    const { events } = this.state;

    return (
      <div className="event-container" id="event">
        <Helmet>
          <title>Events - Heeds Foundation</title>
          <meta name="description" content="Discover the latest events organized by Heeds Foundation. Join us in our efforts to make a positive impact through cloth donations, education campaigns, awareness campaigns, and more. Together, let's create a brighter future for children and empower communities." />
        </Helmet>
        <img src={event_head} alt='header' />
        <div className="title">Events</div>
        <div className='info-event'>
          <p>Welcome to the Heeds Foundation's event! Join us as we embark on a journey of transforming lives through the power of education, healthcare, and sustainable development. This event is dedicated to creating a brighter future for children, ensuring they have access to quality education that opens doors of opportunity. We will also explore the importance of healthcare in nurturing their well-being and discuss sustainable development practices to safeguard their environment.</p>
        </div>
        <div className="events">
          {events.map((event) => (
            <div className="event" key={event.id}>
              <img src={event.imageUrl} alt={event.title} />
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Event;
