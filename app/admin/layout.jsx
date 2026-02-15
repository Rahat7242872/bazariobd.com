
import AdminLayout from "@/components/admin/AdminLayout";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export const metadata = {
    title: "Bazario - Admin",
    description: "Bazario - Admin",
};

export default async function RootAdminLayout({ children }) {
    const user = await currentUser();
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    if (!user) {
        return redirect("/");
    }

    if (user.emailAddresses[0].emailAddress !== adminEmail) {
        return redirect("/not-authorized");
    }

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
