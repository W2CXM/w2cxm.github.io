/*
 * This listing of officers is transferred directly to the club page.
 * Each officer's object contains their title, whether their NetID should be highlighted,
 * The name of the person in the office, and the NetID of the officer. NetID highlighting
 * is historically included for the President and Vice President.
 */
const officers = [
    {
        title: "President",
        highlight: true,
        officer: "Tesla Lukow",
        netid: "KE2HFQ"
    },
    {
        title: "Vice President",
        highlight: true,
        officer: "Polina Doronkina",
        netid: "KO6IQL"
    },
    {
        title: "Secretary",
        highlight: false,
        officer: "Avram Dreyer"
    },
    {
        title: "Treasurer",
        highlight: false,
        officer: "Pradhyum Rajasekar"
    },
    {
        title: "VE Liaison",
        highlight: false,
        officer: "Andrew Lewis",
        netid: "AD2EQ"
    },
    {
        title: "Advisor",
        highlight: false,
        officer: "Mike Hojnowski",
        netid: "KD2EAT"
    }
]

var listing = '';
for (var officer of officers) listing += `<b>${officer.title}</b>\n<br>\n${officer.officer} ${officer.netid ? '(' : ''}<span style="color: ${officer.highlight ? 'rgb(50, 120, 190)' : 'rgb(50, 110, 160)'}">${officer.netid ?? ''}</span>${officer.netid ? ')' : ''}\n<br><br>\n`;
document.getElementById('officers').innerHTML = listing;