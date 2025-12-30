import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <>
      <StyledDashboardLayout>
        <div>آمار</div>
        <div>فعالیت امروز</div>
        <div>نمودار مدت اقامت</div>
        <div>نمودار فروش</div>
      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;
