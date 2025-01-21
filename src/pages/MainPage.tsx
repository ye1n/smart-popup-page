import Button from "../components/Button";

type PopupOptions = {
  route: string;
  width: number;
  height: number;
};

export default function MainPage() {
  const openPopup = (options: PopupOptions) => {
    const { route, width, height } = options;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no,scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div>
      <p>심사원장</p>
      <Button
        label="심사원장"
        onClick={() => openPopup({ route: "/p1", width: 1920, height: 1080 })}
      />
      <p>채권원장</p>
    </div>
  );
}
