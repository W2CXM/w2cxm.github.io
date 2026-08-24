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
        officer: "Tesla Lukow, KE2HFQ",
        netid: "tjl248"
    },
    {
        title: "Vice President",
        highlight: true,
        officer: "Polina Doronkina, KO6IQL",
        netid: "pd445"
    },
    {
        title: "Secretary",
        highlight: false,
        officer: "Avram Dreyer",
        netid: "ajd335"
    },
    {
        title: "Treasurer",
        highlight: false,
        officer: "Pradhyum Rajasekar",
        netid: "pr483"
    },
    {
        title: "VE Liaison",
        highlight: false,
        officer: "Andrew Lewis, AD2EQ",
        netid: "ail36"
    },
    {
        title: "Advisor",
        highlight: false,
        officer: "Mike Hojnowski, KD2EAT",
        netid: "mqh1"
    }
]

var listing = '';
for (var officer of officers) listing += `<b>${officer.title}</b>\n<br>\n${officer.officer} ${officer.netid ? '(' : ''}<span style="color: ${officer.highlight ? 'rgb(50, 120, 190)' : 'rgb(50, 110, 160)'}">${officer.netid ?? ''}</span>${officer.netid ? ')' : ''}\n<br><br>\n`;
document.getElementById('officers').innerHTML = listing;