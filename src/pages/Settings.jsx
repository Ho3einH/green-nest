import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  return (
    <>
      <Heading as="h1">بروزرسانی تنظیمات هتل</Heading>
      <UpdateSettingsForm />
    </>
  );
}

export default Settings;
