const AnnouncementBar = () => {
  const text = "FREE SHIPPING ON ORDERS OVER $150. TAXES & DUTIES INCLUDED";
  
  return (
    <div className="bg-announcement overflow-hidden py-2">
      <div className="scrolling-text flex whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-announcement-foreground text-[11px] tracking-[0.15em] font-medium mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
