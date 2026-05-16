# Creating a Fast Start STACK Tutorial
## FastStart STACK Tutorial

This command will prompt you to select a template. Choose the "STACK" template to create a new project with the Fast Start STACK configuration.

```bash
pnpm create @tanstack/start@latest
```

```bash
cd your-project-name
```

What I've created:
```text
Project:         tanstart-start-tutorial
│    Location:        C:\Users\Nacho\nacho-RapidStart-Tutorials\tanstart-start-tutorial
│    Framework:       React
│    Mode:            file-router
│    Package manager: pnpm
│  
│    ORM:             Prisma
│    Deploy:          Nitro (agnostic)
│    Other add-ons:   ESLint
│  
│    Initialize git:  yes
│    Install deps:    yes
│    Agent skills:    no
```

Then you need to approve the scripts of the packages to run the build process.

```bash
pnpm approve-builds
```

Now you can install dependencies and start the development server:

```bash
pnpm i
pnpm dev
```

It will give you a URL `http://localhost:3000`, but if you are not lucky you will encounter an error (bug) if you try to open it. Because nightly Nitro + Vite SSR = sometimes unstable.

If you encounter an **error**, you can try the following steps:

```bash
pnpm approve-builds
# It's better to remove it manually on the file explorer system (less time consuming) but you can also do it with the command line:
$ rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

![Fast Start STACK](./assets/image.png)