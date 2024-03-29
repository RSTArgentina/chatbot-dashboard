import { Help as HelpIcon } from "@/assets/icons";
import { HelpModal } from ".";

export default function Help() {
  return (
    <>
      <HelpIcon
        className='w-6 h-6 [&>path]:fill-neutral cursor-pointer'
        onClick={() => document.getElementById("helpModal").showModal()}
      />
      <HelpModal />
    </>
  );
}
