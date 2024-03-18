import { Help as HelpIcon } from "@/assets/icons";
import { AddAgentModal } from ".";

export default function Help() {
  return (
    <>
      <HelpIcon
        className='w-6 h-6 [&>path]:fill-neutral cursor-pointer'
        onClick={() => document.getElementById("addAgent").showModal()}
      />
      <AddAgentModal />
    </>
  );
}
