### How to create a basic react app

1. Clonse this project
2. Install web server
```bash
sudo apt-get install -y apache2
```
3. Config web server  
Change *path_to_the_project* in basic-react.conf to path to project directory  
Suppose to *path_to_the_project* is */opt/projects/basic_react*
```bash
sudo a2dissite 000-default.conf
sudo cp /opt/projects/basic_react/basic-react.conf /etc/apache2/sites-enabled/basic-react.conf
sudo a2ensite basic-react.conf
sudo service apache2 restart
```
4. Head over [localhost](https://localhost) and see what going on
