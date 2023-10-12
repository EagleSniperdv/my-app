import Navigation from "../components/Navigation";

const navStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '30px',
    listStyleType:'none',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black',
    width: '450px',
    height: '100vh'
}

const divStyles = {
    display: 'flex',
    
}


export default function DashboardLayout({children}){
    return (
        <>
        <Navigation/>
        {children}
        
            
            
        </>
    );
}