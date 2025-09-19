import logo from "../assets/icon.svg";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#E6DCC4" }} className="shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <a
            href="#"
            style={{ color: "#0A2D57" }}
            className="font-semibold hover:underline transition-colors"
          >
            العودة الى الصفحة الرئيسية
          </a>
        </div>

        <div>
          <img src={logo} alt="شعار جامعة طرابلس" className="h-14" />
        </div>
      </div>
    </header>
  );
}
