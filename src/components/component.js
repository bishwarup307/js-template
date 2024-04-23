import logoPng from "../assets/logo.png";

export default function Container() {
    const container = document.createElement("div");
    container.className =
        "container flex justify-center items-center gap-4 bg-slate-800 mt-16 h-[80vh] text-6xl rounded-3xl shadow-2xl";

    const logo = document.createElement("img");
    logo.className = "w-28 animate-slow-spin";
    logo.src = logoPng;
    container.appendChild(logo);

    const message = document.createElement("p");
    message.className = "text-slate-300 font-medium ";
    message.innerHTML = "Ready to take off? &#128640;";
    container.appendChild(message);

    return container;
}
