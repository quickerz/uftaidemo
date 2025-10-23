Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set DataTable("Username", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "quick3@mail.com" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure DataTable("Password", dtGlobalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure DataTable("Password", dtGlobalSheet) @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set "Quick3" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set "HJ" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone_numberRegisterPage").Set "01199001111" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage").Select "Malaysia" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage").Set "KL" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("AddressAddress").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage").Set "KL" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set "KL" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Postal Code").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal_codeRegisterPage").Set "51100" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("allowOffersPromotion").Set "OFF" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btn").Click @@ hightlight id_;_197708_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu_2").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click @@ script infofile_;_ZIP::ssf22.xml_;_
