import { Setting as SettingIcon } from "@/assets/icons";
import { AddAgentModal } from ".";

export default function Setting() {
  return (
    <>
      <SettingIcon
        className='w-6 h-6 [&>path]:fill-neutral cursor-pointer'
        onClick={() => document.getElementById("addAgent").showModal()}
      />
      <AddAgentModal />
    </>
  );
}
