---
title: Repository Work
layout: default
parent: Developer Documentation
nav_order: 90
---
# Working with the Specification Repository
This document explains how to work with the repository for the SAF specification. It is intended for SAF developers, not for SAF users.
 
The [SAF Specification Repository](https://github.com/GfSE/SAF-Specification) is the source for the SAF Documentation at saf.gfse.org.

There are several ways to interact with the repository.

## Work on a fork
This is the recommended way if a larger change request, e.g. a new viewpoint is to be submitted to the SAF working group, because it allows to create and review a pull request separate from other changes.

It is also the only way to interact with the SAF Repository for developers external to the SAF working group.

The fork / pull request workflow is well established and documented in the open source community, thus we give only a very brief overview:

* The developer forks the Specification repository into the own github account.
* The developer clones the repositiory to the local machine and works on it. A preview of the documentation can be generated locally by installing a toolchain, see [Document Generation](docgen.md)
* The developer creates a pull request
* The pull request is reviewed by the SAF working group and either applied or rejected for rework

It is recommended to contact the SAF working group before working on a fork.

## Work locally on a clone
A SAF Developer within the working group usually has a clone of the specification repository and pushes the changes. Those changes are not pushed to the main branch directly, but to a 'feature' branch.

Those branches are selectable from the main menu of the saf.gfse.org documentations site, once the document generation workflow has been started manually on the feature branch.

The resulting work of the feature branch is then presented to the SAF working group and then eventually merged into the main branch, by pull request(PR).

Once the work is completed (PR closed), the feature branch is removed.

## Work directly on the repository using the web interface
This is not recommendet and should be used only for small redactional changes.

The advantage is, that it does not require a local installation of the document generation toolchain. 

The huge disadvantage is, that the changes are immediately applied to the saf specification and visible to everyone. Thus it is not recommended, for any nonredactional changes. 