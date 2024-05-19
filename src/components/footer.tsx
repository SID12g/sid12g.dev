export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className=" h-[80px] flex items-center justify-between text-font-color">
      <p>Copyright ⓒ {year} sid12g All rights reserved.</p>
      <div className="flex h-[36px] items-center text-[40px] font-['Tossface'] cursor-pointer">
        🇰🇷
      </div>
    </div>
  );
}
