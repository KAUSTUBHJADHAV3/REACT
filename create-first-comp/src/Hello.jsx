function Hello(){
    let myName = 'Kaustubh';
    let number = 456;
    let fullName =() =>{
        return 'kaustubh jadhav';
    }
    return <p>
        MessageNo:{number} I am your master    {fullName()}
    </p>
}
export default Hello;