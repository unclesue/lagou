import Header from "../components/header";
import Navigation from "../components/navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
}
