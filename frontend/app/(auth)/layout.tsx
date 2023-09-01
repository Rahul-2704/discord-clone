const authLayOut = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="flex flex-row justify-center items-center h-full">
            {children}
        </div>
     );
}
 
export default authLayOut;