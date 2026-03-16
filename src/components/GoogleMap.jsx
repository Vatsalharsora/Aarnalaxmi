import React from 'react';

const GoogleMap = ({ 
  address = "Global Trade Centre, Cotton Avenue, Sector 15, Ahmedabad, Gujarat 380015",
  title = "Aarnalaxmi Cotton",
  height = "h-96",
  showControls = true 
}) => {
  // Encode the address for Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  
  // Fallback embed URL (works without API key but with limitations)
  const fallbackSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5942847513!2d72.5713621!3d23.0344818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af325a448f09478!2sCotton%20Avenue%2C%20Sector%2015%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className={`${height} bg-gray-100 relative`}>
        <iframe
          src={fallbackSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${title} Location - ${address}`}
          className="rounded-2xl"
        ></iframe>
        
        {showControls && (
          <>
            {/* Location Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-900">{title}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Global Trade Centre</p>
              <p className="text-xs text-gray-500">Ahmedabad, Gujarat</p>
            </div>

            {/* View in Maps Button */}
            <div className="absolute bottom-4 right-4">
              <a 
                href={`https://maps.google.com/?q=${encodedAddress}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View in Maps
              </a>
            </div>

            {/* Directions Button */}
            <div className="absolute bottom-4 left-4">
              <a 
                href={`https://maps.google.com/dir/?api=1&destination=${encodedAddress}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Directions
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;