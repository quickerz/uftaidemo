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
	'Click the profile  icon
	'# Feature Spy with AI enhancements'
		AIUtil("profile").Click
		AIUtil("input", "Username").Highlight
		AIUtil("input", "USER NAME").Type "Mercury"
'		AIUtil.FindTextBlock("OR").Click
		AIUtil("input", "PASSWORD").Type "Mercury"
		AIUtil("button", "SIGN IN").Click
End Function

Function Logout
	Set dt=DataTable
		AIUtil("profile").Click
		AIUtil.FindTextBlock("Sign out").Click
	
End Function

'Datatable.Importsheet "[QualityCenter\Resources] Resources\Advantage Online Banking\Test Data\AOB UFT AI Test Data", "Global","Global"

set oContext=LaunchEnvironment
AIUtil.SetContext oContext 	
Login
Logout

