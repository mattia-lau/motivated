# Submitting Pull Request (PR)

1. Fork this repo. 
2. Make your changes in a new git branch:
   ```
   git checkout -b my-fix-branch-name master
   ```
3. Create your patch, `including appropriate test cases`
4. Follow the Coding Rules
5. Commit your changes using a descriptive message.
   ```
   git commit -a
   ```
   Note: the optional commit -a command line option will automatically "add" and "rm" edited files.
6. Push your branch to BitBucket:
   ```
   git push origin my-fix-branch-name
   ```
7. In BitBucket, send a pull request to master branch

# After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```
  git push origin --delete my-fix-branch-name
  ```

- Check out the master branch:

  ```
  git checkout master -f
  ```

- Delete the local branch:

  ```
  git branch -D my-fix-branch-name
  ```

- Update your master with the latest upstream version:

  ```
  git pull --ff upstream master
  ```
