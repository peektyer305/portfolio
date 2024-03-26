export default function HeaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <header>{children}</header>
    )
}