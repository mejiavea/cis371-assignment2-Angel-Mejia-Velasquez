import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupElements = document.getElementsByClassName("syrup");

  if (syrupElements.length === 0) return;

  const color = syrups[input.value];
  if (!color) return;
  for (let i = 0; i < syrupElements.length; i++) {
    const element = syrupElements[i] as HTMLDivElement;
    element.style.setProperty("--syrup-color", color);
  }
}

function setupSyrupListeners(): void {
  const selectedRadio = document.querySelector<HTMLInputElement>('input[name="syrup"]:checked');
  if (selectedRadio) {
    applySyrup(selectedRadio);
  }
  
  const radioButtons =
    document.querySelectorAll<HTMLInputElement>('input[name="syrup"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      applySyrup(radio);
    });
  });
}
setupSyrupListeners();

function setupCreamListeners(): void {
  const selectedRadio = document.querySelector<HTMLInputElement>('input[name="cream"]:checked');
  if (selectedRadio) {
    applyCream(selectedRadio);
  }

  const radioButtons =
    document.querySelectorAll<HTMLInputElement>('input[name="cream"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyCream(radio);
    });
  });
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  const selectedRadio = document.querySelector<HTMLInputElement>('input[name="temperature"]:checked');
  if (selectedRadio) {
    applyTemperature(selectedRadio);
  }

  const RadioButtons =
    document.querySelectorAll<HTMLInputElement>('input[name="temperature"]');
  
  RadioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyTemperature(radio);
    });
  });
}
setupTemperatureListeners();

function setupBaseListeners(): void {
  const selectedRadio = document.querySelector<HTMLInputElement>('input[name="base"]:checked');
  if (selectedRadio) {
    applyBase(selectedRadio);
  }

  const RadioButtons =
    document.querySelectorAll<HTMLInputElement>('input[name="base"]');

  RadioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyBase(radio);
    });
  });
}
setupBaseListeners();
