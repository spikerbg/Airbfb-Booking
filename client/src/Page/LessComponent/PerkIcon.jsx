

const PerkIcon = ({ perk }) => {
    // Mapping between perk names and icons
    const perkIcons = {
      Wifi: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          {/* Your Wifi icon SVG path */}
        </svg>
      ),
      TV: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          {/* Your TV icon SVG path */}
        </svg>
      ),
      PrivateEnterance: (
        // Add more icons for other perks as needed
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          {/* Your PrivateEnterance icon SVG path */}
        </svg>
      ),
      Pets: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          {/* Your Pets icon SVG path */}
        </svg>
      ),
    };
  
    return perkIcons[perk] || (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        {/* Default icon in case there is no specific icon for the perk */}
      </svg>
    );
  };
  
  export default PerkIcon;