import {
  ProgressBarComponent,
  ILoadedEventArgs,
  ProgressTheme,
} from "@syncfusion/ej2-react-progressbar";

let linearOne: ProgressBarComponent;
let linearTwo: ProgressBarComponent;
let linearThree: ProgressBarComponent;
let linearFour: ProgressBarComponent;
let linearFive: ProgressBarComponent;
let progressLoad: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
  let div: HTMLCollection =
    document.getElementsByClassName("progressbar-label");
  let selectedTheme: string = location.hash.split("/")[1];
  selectedTheme = selectedTheme ? selectedTheme : "Material";
  args.progressBar.theme = (
    selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
  )
    .replace(/-dark/i, "Dark")
    .replace(/contrast/i, "Contrast") as ProgressTheme;
  if (
    args.progressBar.theme === "HighContrast" ||
    args.progressBar.theme === "Bootstrap5Dark" ||
    args.progressBar.theme === "BootstrapDark" ||
    args.progressBar.theme === "FabricDark" ||
    args.progressBar.theme === "TailwindDark" ||
    args.progressBar.theme === "MaterialDark" ||
    args.progressBar.theme === "FluentDark"
  ) {
    for (let i = 0; i < div.length; i++) {
      div[i].setAttribute("style", "color:white");
    }
  }
};
function replayClick(): void {
  linearOne.refresh();
  linearTwo.refresh();
  linearThree.refresh();
  linearFour.refresh();
  linearFive.refresh();
}

const SAMPLE_CSS = `
      #control-container {
         padding: 0px !important;
     }
 
     .linear-parent {
         text-align: center;
         width: 80%;
         margin: auto !important;
     }
 
     .progressbar-label {
         text-align: left;
         font-family: Roboto-Regular;
         font-size: 14px;
         color: blue;
         margin-left: 10px;
         padding: 0px;
         top: 10px;
     }
 
     #reLoad {
         border-radius: 4px;
         text-transform: capitalize;
     }
     `;

export default function Progressbar() {
  return (
    <>
      <style>{SAMPLE_CSS}</style>
      <ProgressBarComponent
        id="lineardeterminate"
        ref={(linear1) => (linearOne = linear1)}
        type="Linear"
        height="60"
        value={100}
        animation={{
          enable: true,
          duration: 2000,
          delay: 0,
        }}
        load={progressLoad.bind(this)}
      ></ProgressBarComponent>
    </>
  );
}
