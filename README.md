Zadanie 4 - system do wysyłki maili
Celem zadania jest zbudowanie systemu do wysyłki maili do osób, które znajdują się w naszej bazie danych.

Założenia:

Korzystamy z Airtable jako miejsca przechowywania danych
Korzystamy z Mailgun lub innego systemu udostępniającego API RESTowe do wysyłki maili
Interfejs aplikacji tworzymy w React.js
Aplikacja będzie średniego rozmiaru, więc być może nie będzie wygodnie tworzyć jej z wykorzystaniem CodeSandbox. Możesz to zrobić wysyłając kod do repozytorium na GitHub.

Działanie aplikacji:
Lista odbiorców (subskrybentów) znajdujących się w naszej bazie danych. Lista zawiera
Email, Imię oraz datę dodania subskrybenta
Możliwość dodania nowego subskrybenta:
Formularz stworzony za pomocą react-hook-form z walidacją, który zawiera dwa pola: email oraz imię. Data powinna zapisać się automatycznie
Taki obiekt subskrybenta powinien zapisać się w Airtable w tabelce Subscribers
Aplikacja powinna umożliwiać wysłanie maili do wszystkich osób, które znajdują się w tabelce Subscribers. Odbywa się to poprzez założenie nowego obiektu Campaign (również dostępny w Airtable). Ten obiekt będzie zawierał pola:
subject - tytuł wysyłanego maila
content - treść wysyłanego maila
Aplikacja wykorzystuje PropTypes
Modyfikacja - dodaj do treści maila specjalną frazę {{ name }}, która w to miejsce wstawi imię subskrybenta. Np. jeśli wprowadzisz treść wiadomości:
Cześć {{ name }},
dzisiaj chcę wysłać kilka ciekawostek ze świata Reacta.

Pozdrawiam,
P.
Wynikiem będzie wstawienie imienia dla każdego subskrybenta. Czyli mając w tabelce Subscribers subskrybenta o imieniu Gwidon i mailu gwidon@wp.pl treść maila powinna wyglądać:

Cześć Gwidon,
dzisiaj chcę wysłać kilka ciekawostek ze świata Reacta.

Pozdrawiam,
P.
Istnieje możliwość wejścia w szczegóły subskrybenta. Odbywa się to poprzez kliknięcie w adres e-mail lub imię na liście. Wówczas zostaniemy przeniesieni na stronę, która pobierze tylko ten jeden rekord z bazy i wyświetli na ekranie.

Kampanie po wysłaniu powinny być dostępne w tabelce Campaigns. Jako modyfikację można też rozważyć tworzenie nowego obiektu Campaign w momencie rozpoczęcia tworzenia maila. Dzięki temu można będzie wrócić do edycji za jakiś czas.

Wysłanych kampanii nie będzie można edytować.

Niewysłane kampanie będzie można usunąć.

Ponieważ aplikacja będzie zawierała dane "średnio-wrażliwe", czyli m.in. adresy email, to będzie dostępna dopiero po podaniu tzw. "passphrase". Za pierwszym razem, gdy ktoś otworzy aplikację, to powinien otrzymać tylko prosty formularz z polem tekstowym, gdzie nalży podać tajny tekst. Ten tekst może być ustawiony na sztywno w aplikacji (czyli np. "szkolareacta", "react", "lubieplacki" itp.). Po podaniu prawidłowego tekstu zostanie pokazana cała aplikacja.
