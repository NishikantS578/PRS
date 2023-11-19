# PRS

# How to setup

---

## Frontend setup

  Inside Frontend directory.
  
  1. Install Dependencies
  
      ```
        npm i
      ```
  
  1. Create env variables
      Use Provided sample env file.
  
  1. Run Server
  
      ```
        npm run dev
      ```

---

## Backend setup

Inside Backend Directory.
  
1. Creating Python virtual environment
     ```
     python -m venv <PATH TO VIRTUAL ENVIRONMENT>
     ```

1. Activate Python virtual environment
   - Windows:
       - cmd.exe
           ```
           <PATH TO VIRTUAL ENVIRONMENT>\Scripts\activate.bat
           ```
       - PowerShell
          ```
          <PATH TO VIRTUAL ENVIRONMENT>\Scripts\Activate.ps1
          ```
   - Linux:
       ```
       source <PATH TO VIRTUAL ENVIRONMENT>/bin/activate
       ```

1. Install packages
    ```
      python -m pip install -r requirements.txt
    ```

1. Create env variables
    Use Provided sample env file.

1. Run Server
    ```
      pythonx manage.py runserver <YOUR PRIVATE IP>:8000
    ```
    >replace x above by your python version
