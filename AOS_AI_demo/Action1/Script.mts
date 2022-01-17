'ONE TEST : Advantage online shopping login and logoff 
'based on AI
'Supported env: Desktop Chrome and Firefox, iOS, Android, and mobile web (15.0.1)
'	This connects to demo.mobilecenter.io, you must put in your credentials into Tools | Options


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Launching env
Function LaunchEnvironment
		Set dt=DataTable
		Select Case 	dt.Value("Context")
			Case "Browser"
			
				While Browser("CreationTime:=0").Exist(0)   
					Browser("CreationTime:=0").Close 
				Wend
				SystemUtil.Run dt.Value("Browser") & ".exe" ,"","","",3
				Set LaunchEnvironment=Browser("CreationTime:=0")
				LaunchEnvironment.ClearCache
				LaunchEnvironment.Navigate dt.value("URL")
				LaunchEnvironment.Sync
				wait(2)
				LaunchEnvironment.Maximize
				
			Case "Device"	
				Set oDevice=Device("Class Name:=Device","ostype:=" & dt.value("ostype") ,"id:=" & dt.value("device_id"))
				Set oApp=oDevice.App("Class Name:=App","identifier:=" & dt.value("app_identifier") ,"instrumented:=" & dt.value("app_instrumented"))		
				Set	LaunchEnvironment=oDevice
				oApp.Launch Install, Restart
'				oApp.Launch DoNotInstall, Restart
'				oApp.Launch 
					
		End Select
End Function

Function Login
	Dim rc
	
	'========================================================================================================================
	'	Login
	'If mobile web, navigate to the URL
		If DataTable.Value("app_identifier") = "MC.Browser" Then
			wait 1
			AIUtil("home").Click
			rc = AIUtil.FindTextBlock("SPEAKERS").Exist(10)
		End If
	
	'Click the hamburger if it exists
	If AIUtil("hamburger_menu").Exist Then
		AIUtil("hamburger_menu").Click
	End If

	'Click the profile  icon
	'# Feature Spy with AI enhancements'
		AIUtil("profile").Click
		AIUtil("input", "Username").Highlight
		If DataTable.Value("Context") = "Browser" Then
			AIUtil("input", "USER NAME").Type "Mercury"
			AIUtil.FindTextBlock("OR").Click
			AIUtil("input", "PASSWORD").Type "Mercury"
		Else
			AIUtil("input", "USER NAME").Type "aidemo"
			AIUtil.FindTextBlock("OR").Click
			AIUtil("input", "PASSWORD").Type "AIdemo1"
		End If
		
	'Click the login button
	If AIUtil("button", "LOGIN").Exist Then
		AIUtil("button", "LOGIN").Click
	ElseIf AIUtil("button", "SIGN IN").Exist Then
		AIUtil("button", "SIGN IN").Click
	End If
		

	If DataTable.Value("ostype") = "iOS" Then
		AIUtil("hamburger_menu").Click
		AIUtil("location").Click
	End  If

	'Wait for the shopping cart button to show, doesn't show on screen for mobile web, sync on SPEAKERS text instead for mobile web
'		If DataTable.Value("app_identifier") = "MC.Browser" Then
'			rc = AIUtil.FindTextBlock("SPEAKERS").Exist(10)
'		Else
'			rc = AIUtil("shopping_cart").Exist(10)
'		End If
	
End Function

Function Logout
	Set dt=DataTable
	Set oDevice=Device("Class Name:=Device","ostype:=" & dt.value("ostype") ,"id:=" & dt.value("device_id"))
				
	'========================================================================================================================
	'	Logout
	If Not DataTable.Value("ostype") = "iOS" Then
		If DataTable.Value("Context") = "Device" Then
			if  AIUtil("hamburger_menu").exist(0) then AIUtil("hamburger_menu").Click
		End  If
		'Click the profile  icon
			AIUtil("profile").Click
		'Business process differs between desktop and mobile
			If DataTable.Value("app_identifier") = "MC.Browser" Then
				AIUtil.FindTextBlock("Sign out").Click
			Else
				Select Case DataTable.Value("Context")
					Case "Browser"
						AIUtil.FindTextBlock("Sign out").Click
					Case "Device"	
						If DataTable.value("ostype") = "IOS" Then
			'				IOS version of the app draws a box around the button, Android does not.  Additionally, the OCR is seeing the text different per OS, submitted feedback.
							If AIUtil("button", "Ye S").Exist Then
								AIUtil("button", "Ye S").Click
							End If
						ElseIf AIUtil.FindTextBlock("YES").Exist Then
			'				Android
							AIUtil.FindTextBlock("YES").Click
						Else
							AIUtil("hamburger_menu").Click
							AIUtil("location").Click
						End If
				End Select
			End If
		End  If
		
	If  DataTable.Value("Context") = "Device" then 
		oDevice.CloseViewer
	Else
		Browser("CreationTime:=0").Close
	End  If
	
End Function

'Datatable.Importsheet "[QualityCenter\Resources] Resources\Advantage Online Banking\Test Data\AOB UFT AI Test Data", "Global","Global"

set oContext=LaunchEnvironment
AIUtil.SetContext oContext 	
Login
Logout

