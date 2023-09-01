import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs/app-beta";
const Page = () => {
    return ( 
        <div>
            <UserButton afterSignOutUrl="/"/>
            <ModeToggle/>
        </div>
     );
}
 
export default Page;