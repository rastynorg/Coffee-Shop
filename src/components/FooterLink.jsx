import { NavLink } from "react-router-dom";

const FooterLink = ({ to, children }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-x-2 md:gap-x-3 transition-colors ${
            isActive ? "text-orange-300" : "text-gray-300"
          }`}
        >
          <div
            className={`w-2 md:w-2.5 h-1 rounded-full transition-colors ${
              isActive ? "bg-orange-300" : "bg-gray-300"
            }`}
          />

          <span>{children}</span>
        </div>
      )}
    </NavLink>
  );
};

export default FooterLink;