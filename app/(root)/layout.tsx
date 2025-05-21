import { ChildProps } from "@/types"
import Footer from "./_components.tsx/footer"
import Header from "./_components.tsx/header"
import { Toaster } from "sonner"

function Layout ({children}: ChildProps) {
    return <div>
        <Header/>
        <main className="pt-24 pb-12 px-12">
            {children}
        </main>
        <Footer/>
        <Toaster position="top-center"/>
    </div>
}
export default Layout