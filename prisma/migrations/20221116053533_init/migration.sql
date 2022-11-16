/*
  Warnings:

  - A unique constraint covering the columns `[post_id]` on the table `Posts_Tags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `post_id` to the `Posts_Tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts_Tags" ADD COLUMN     "post_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Posts_Tags_post_id_key" ON "Posts_Tags"("post_id");

-- AddForeignKey
ALTER TABLE "Posts_Tags" ADD CONSTRAINT "Posts_Tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
