export default function ReviewBelt() {
  // Our fake review data
  const reviews = [
    {
      id: 1,
      name: "Emily Rodriguez",
      rating: 5,
      text: "This product exceeded all my expectations. The quality is outstanding and customer service was incredibly helpful throughout the process.",
      location: "Austin, TX"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "I've been using this for three months now and it's completely transformed my daily routine. Highly recommend to anyone on the fence!",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 4,
      text: "Great product overall. Setup was easy and it works exactly as described. Only minor issue was shipping took a bit longer than expected.",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "David Park",
      rating: 5,
      text: "Best purchase I've made this year. The attention to detail is remarkable and you can tell they really care about their customers.",
      location: "Boston, MA"
    },
    {
      id: 5,
      name: "Jessica Martinez",
      rating: 5,
      text: "Absolutely love it! The design is sleek, functionality is perfect, and it arrived faster than promised. Will definitely buy again.",
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
    <div style={styles.container}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      
      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Carousel viewport */}
      <div style={styles.viewport}>
        <div className="animate-scroll" style={styles.scrollContainer}>
          {/* Render all reviews including duplicates */}
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} style={styles.reviewCard}>
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
    backgroundColor: '#F9FAFB',
    padding: '64px 16px',
    overflow: 'hidden'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '48px',
    color: '#111827'
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
    width: '500px',
    flexShrink: 0,
    minWidth: '500px',
    paddingBottom: '10px'
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
  }
};