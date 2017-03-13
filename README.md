# REC&MAKE | Team Machine Lenin

![](https://github.com/nebur395/uCode17/blob/master/src/main/webapp/images/logo.png)

## Start using this App ##
 Assuming you have JDK 8 already installed, follow this instructions:

1. Install Scala in your system (you will need it to run the App) from [here](http://www.scala-lang.org/download). And don't forget to set up the enviroment variables as it's shown [here](http://www.scala-lang.org/download/install.html).
2. Install Scalatra following the instructions given in the [official webpage](http://scalatra.org/getting-started/installation.html).
3. Clone this repository:
```sh
$ git clone https://github.com/nebur395/uCode17
```

## Build & Run ##
SBT is the tool used to build and run this Scala project. It is a common way to run when developing an Scala application, it will manage all your dependencies and will run the JVM needed to start the Scala aplication.
When you type `./sbt` an interpreter will open where you will type `jetty:start` in order to run this app.
To sum up:

```sh
$ cd uCode17
$ ./sbt
> jetty:start
```

Then access [http://localhost:8080/](http://localhost:8080/) in your browser.

## Test ##
SBT allows you to run the tests defined on *src/test*:

```sh
$ git clone https://github.com/nebur395/uCode17
$ cd uCode17
$ ./sbt
> test
```

## Other commands ##
`>clean` allows you to remove the content in the target folder which will cause
SBT to check the dependencies again. If any dependency is not updated, it will
automatically download the correct version.

# EditorConfig
[EditorConfig](http://editorconfig.org/) helps developers maintain consistent coding styles between different editors and IDEs. It is a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.
You need to create a .editorconfig file in which you define the coding style rules. It is similar to the format accepted by gitignore.

## IDEs supported by EditorConfig
These editors come bundled with native support for EditorConfig. Everything should just work: [BBEdit](http://www.barebones.com/support/technotes/editorconfig.html), [Builder](https://wiki.gnome.org/Apps/Builder/Features#EditorConfig), [CLion](https://github.com/JetBrains/intellij-community/tree/master/plugins/editorconfig), [GitHub](https://github.com/RReverser/github-editorconfig#readme), [Gogs](https://gogs.io/), [IntelliJIDEA](https://github.com/JetBrains/intellij-community/tree/master/plugins/editorconfig), [RubyMine](https://github.com/JetBrains/intellij-community/tree/master/plugins/editorconfig), [SourceLair](https://www.sourcelair.com/features/editorconfig), [TortoiseGit](https://tortoisegit.org/), [WebStorm](https://github.com/JetBrains/intellij-community/tree/master/plugins/editorconfig).

## IDEs not supported by EditorConfig file

To use EditorConfig with one of these editors, you will need to install a plugin: [AppCode](https://plugins.jetbrains.com/plugin/7294), [Atom](https://github.com/sindresorhus/atom-editorconfig#readme), [Brackets](https://github.com/kidwm/brackets-editorconfig/), [Coda](https://panic.com/coda/plugins.php#Plugins), [Code::Blocks](https://github.com/editorconfig/editorconfig-codeblocks#readme), [Eclipse](https://github.com/ncjones/editorconfig-eclipse#readme), [Emacs](https://github.com/editorconfig/editorconfig-emacs#readme), [Geany](https://github.com/editorconfig/editorconfig-geany#readme), [Gedit](https://github.com/editorconfig/editorconfig-gedit#readme), [Jedit](https://github.com/editorconfig/editorconfig-jedit#readme), [Komodo](http://komodoide.com/packages/addons/editorconfig/), [NetBeans](https://github.com/welovecoding/editorconfig-netbeans#readme), [NotePadd++](https://github.com/editorconfig/editorconfig-notepad-plus-plus#readme), [PhpStorm](https://plugins.jetbrains.com/plugin/7294), [PyCharm](https://plugins.jetbrains.com/plugin/7294), [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme), [Textadept](https://github.com/editorconfig/editorconfig-textadept#readme), [textmate](https://github.com/Mr0grog/editorconfig-textmate#readme), [Vim](https://github.com/editorconfig/editorconfig-vim#readme), [Visual Studio](https://github.com/editorconfig/editorconfig-visualstudio#readme), [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), [Xcode](https://github.com/MarcoSero/EditorConfig-Xcode)
