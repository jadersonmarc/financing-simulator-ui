function FooterSection({ title, items }) {
    return (
      <ul className="text-white hidden md:block space-y-2">
        <li><p className="font-medium">{title}</p></li>
        {items.map((item, index) => (
          <li key={index}><p className="text-sm">{item}</p></li>
        ))}
      </ul>
    );
  }
  
  export default FooterSection;
  