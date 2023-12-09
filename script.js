let percentage = prompt("Enter your percentage:");

percentage = parseFloat(percentage);


if (!isNaN(percentage)) 
{
    let grade;
    switch (true) 
    {
        case percentage >= 90:
            grade = 'A';
            break;
        case percentage >= 80:
            grade = 'B';
            break;
        case percentage >= 70:
            grade = 'C';
            break;
        case percentage >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    alert(`Your grade is: ${grade}`);
} else 
{
    alert("Please enter a valid percentage.");
}
