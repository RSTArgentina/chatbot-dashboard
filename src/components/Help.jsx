import { Help as HelpIcon } from "@/assets/icons";
import { PutClientModal } from ".";

export default function Help() {
  return (
    <>
      <HelpIcon
        className='w-6 h-6 [&>path]:fill-neutral cursor-pointer'
        onClick={() => document.getElementById("addAgent").showModal()}
      />
      <PutClientModal />
    </>
  );
}
