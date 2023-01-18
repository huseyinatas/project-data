import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header() {
  return (
    <AppBarComponent
      className="flex items-center justify-between px-8 py-4 bg-[#0C6DFD]"
      colorMode="Primary"
    >
      <div>
        <ButtonComponent
          ref={(regularBtn) => (regularBtn = regularBtn)}
          aria-label="menu"
          cssClass="e-inherit menu bg-transparent border-none hover:bg-transparent hover:border-none focus:bg-transparent focus:border-none focus:outline-none"
          iconCss="e-icons e-menu"
        ></ButtonComponent>
        <span className="regular ml-4 text-white">Project Data</span>
      </div>
      <div className="e-appbar-spacer"></div>
      <div className="e-avatar e-avatar-xsmall e-avatar-circle image">
        <img
          src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          alt=""
        />
      </div>
    </AppBarComponent>
  );
}
