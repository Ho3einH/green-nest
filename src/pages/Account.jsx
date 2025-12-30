import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">بروزرسانی حساب کاربری</Heading>

      <Row>
        <Heading as="h3">بروزرسانی اطلاعات کاربر</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">تغییر رمز عبور</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
