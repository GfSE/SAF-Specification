---
title: Documentation Generation
layout: default
parent: Developer Documentation
nav_order: 80
---
# SAF Specification Documentation Generation
This document covers the document generation process for the SAF specification. It is intended for SAF developers, not for SAF users.
## Concepts and Tools
The SAF Specification is generated into HTML pages from a model. The generation happens in several steps:
* JSON Files are generated from a document generator Model. The document generation model references the specification model and the example model. The generation itself is accomplished by a combination of some custom model elements and scripts, and is started from the modeling tool.  
* HTML pages are generated from template files in the SAF Specification repository and abovementioned JSON Files. The generation uses Jekyll as generation tool. The template files are mainly written in markdown and use the Liquid template language provided by Jekyll

## Github Workflow on SAF Specification Repository
The SAF Specification repository contains a workflow which generates the HTML pages from the JSON and markdown files. It is triggered by commits to the Specification repository.

## Local document generation using docker and vs-code
 * [install git](https://git-scm.com/downloads)
 * install wsl 2 (no distro)
   
   in a powershell 
    ```
    wsl --install --no-distro
    ```
 * [install docker desktop](https://docs.docker.com/desktop/setup/install/windows-install/) (a WSL2 based installation)
 * clone the SAF Specification repository to your machine
   ```
   git clone https://github.com/GfSE/SAF-Specification.git
   ```
 * [install vs-code](https://code.visualstudio.com/download)
 * open repo with vs code. Vscode will advise to install some extensions, please follow those recommendations for vscode extensions.
   Finally this will create the container image and run it.
   the SAF documentation is available at localhost:4000

## Local document generation (manual setup)
### setting up local document generation
 * [install git](https://git-scm.com/downloads)
 * clone the SAF Specification repository to your machine

   ```
   git clone https://github.com/GfSE/SAF-Specification.git
   ```
 * [install ruby,bundler and jekyll](https://jekyllrb.com/docs/installation/)
    
    on linux, it is recommended to setup a user specifc tool chain, not interfering with the system :
    ```
    gem install bundler --user-install
    export PATH="~/.local/share/gem/ruby/3.2.0/bin/:$PATH"
    export BUNDLE_PATH="~/.local/share/gem/ruby/3.2.0/gems/"
    ```
### running local document generation
Run the document generation starting a local web server and open the saf documentation locally
* in the cloned repository dir, start the generation
  ```
  bundle excec jekyll serve
  ```
* open http://localhost:4000 with a browser

The pages are updated on change of the files. It takes a while, give or take 15-20 seconds. The update is reported in the shell where you called *bundle excec jekyll serve*