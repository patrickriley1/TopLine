import './index.css';

export default function ReviewBelt() {
  // Our fake review data
  const reviews = [
    {
      id: 1,
      name: "Jackson Read",
      rating: 5,
      text: "Amazing work from Carter. I'd reccomend this to anyone.",
      location: "Clearwater, FL"
    },
    {
      id: 2,
      name: "Izael Rios",
      rating: 5,
      text: "Great detailing job on my car!",
      location: "Ft Myers, FL"
    },
    {
      id: 3,
      name: "Patrick Riley",
      rating: 5,
      text: "I love the look of my car, it feels like I bought a new one!",
      location: "Estero, FL"
    },
    {
      id: 4,
      name: "Dominic Maraldo",
      rating: 5,
      text: "Service was great!",
      location: "Miami, FL"
    },
    {
      id: 5,
      name: "Jane Smith",
      rating: 5,
      text: "I can see my reflection on the exterior like its a mirror!",
      location: "Miami, FL"
    }
  ];

  // Duplicate reviews three times for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Helper function to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        style={{ 
          color: index < rating ? '#FBBF24' : '#D1D5DB',
          fontSize: '20px'
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div style={styles.container} className='carouselDiv'>
      <h2 style={styles.title}>See What Our Customers Are Saying!</h2>


      
      {/* Carousel viewport */}
      <div style={styles.viewport}>
        <div className="animate-scroll" style={styles.scrollContainer}>
          {/* Render all reviews including duplicates */}
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} style={styles.reviewCard} className="reviewCard">
              <div style={styles.cardInner}>
                {/* Star rating */}
                <div style={styles.stars}>
                  {renderStars(review.rating)}
                </div>
                
                {/* Review text */}
                <p style={styles.reviewText}>
                  "{review.text}"
                </p>
                
                {/* Customer info */}
                <div style={styles.customerInfo}>
                  <p style={styles.customerName}>{review.name}</p>
                  <p style={styles.customerLocation}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline styles object
const styles = {
  container: {
    width: '100%',
    backgroundColor: 'var(--color1)',
    overflow: 'hidden',
    margin: '0 auto'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '48px',
    color: 'var(--color5)'
  },
  viewport: {
    maxWidth: '1280px',
    margin: '0 auto',
    overflow: 'hidden'
  },
  scrollContainer: {
    display: 'flex',
    gap: '24px'
  },
  reviewCard: {
    width: '400px',
    flexShrink: 0,
    minWidth: '400px',
    border: '2px solid var(--color2)',
    borderRadius: '12px',
    transition: '0.3s ease',
    marginBottom: '16px',
    marginTop: '16px'
  },
  cardInner: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '250px',
    overflow: 'visible'
  },
  stars: {
    textAlign: 'center',
    marginBottom: '16px'
  },
  reviewText: {
    fontSize: '16px',
    color: '#374151',
    fontStyle: 'italic',
    marginBottom: '16px',
    flexGrow: 1,
    lineHeight: '1.6'
  },
  customerInfo: {
    textAlign: 'center',
    borderTop: '1px solid #E5E7EB',
    paddingTop: '16px',
    width: '100%',
    overflow: 'visible'
  },
  customerName: {
    fontWeight: '600',
    color: '#111827',
    margin: '0 0 4px 0',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    width: '100%'
  },
  customerLocation: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0
  },
  viewport: {
    width: '100vw',
    overflow: 'hidden',
  }
};